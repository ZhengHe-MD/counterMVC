import {
  observable,
  computed,
  action,
  autorunAsync
} from 'mobx'

import request from 'superagent'
import promisify from 'superagent-as-promised'
promisify(request)

const STORAGE_PREFIX = 'mobx-comments.'

class Comment {
  // @observable username
  // @observable thumbnail = null
  
  constructor(store, id, username, thumbnail, comment) {
    this.store = store
    this.id = id
    this.username = username
    this.thumbnail = thumbnail
    this.comment = comment
    this._saveHandle = autorunAsync(() => {
      window.localStorage.setItem(STORAGE_PREFIX + this.id, JSON.stringify(this.asJSON))
    })
  }

  @computed get displayName() {
		const cfl = capitalizeFirstLetter;
		return `${cfl(this.username)}`;
	}

  @computed get asJSON() {
    return {
      id: this.id,
      username: this.username,
      thumbnail: this.thumbnail
    }
  }

  @action delete() {
    this._saveHandle()
    this.store.removeComment(this)
  }
}

export class CommentStore {
  @observable comments = []
  @observable pendingRequestCount = 0

  @computed get isLoading() {
    return this.pendingRequestCount > 0
  }

  @action createRandomComment(words) {
    this.pendingRequestCount++
    request
      .get('https://randomuser.me/api/')
			.set('Accept', 'application/json')
      .then(results => {
        const data = JSON.parse(results.text).results[0];
        const comment = new Comment(
          this,
          data.dob,
          data.login.username,
          data.picture.thumbnail,
          words
        )
        this.comments.push(comment)
        this.pendingRequestCount--
      })
      .catch(error => console.error)
  }

  @action getComments() {
    return this.comments.slice()
  }

  @action removeComment(comment) {
    window.localStorage.removeItem(STORAGE_PREFIX + comment.id)
    this.comments.remove(comment)
  }
} 

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
