import * as postsAPI from '../api/posts'; // api/posts 안의 함수 모두 불러오기
import {
	reducerUtils,
	handleAsyncActions,
	handleAsyncActionsById,
	createPromiseSaga,
	createPromiseSagaById,
} from '../lib/asyncUtils';
import { takeEvery, getContext } from 'redux-saga/effects';

/* 액션 타입 */

// 포스트 여러개 조회하기
const GET_POSTS = 'GET_POSTS'; // 요청 시작
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'; // 요청 성공
const GET_POSTS_ERROR = 'GET_POSTS_ERROR'; // 요청 실패

// 포스트 하나 조회하기
const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';
const GO_TO_HOME = 'GO_TO_HOME';

// redux-saga
export const getPosts = () => ({ type: GET_POSTS });
// payload는 파라미터 용도, meta는 리듀서에서 id를 알기 위한 용도
export const getPost = id => ({ type: GET_POST, payload: id, meta: id });
export const goToHome = () => ({ type: GO_TO_HOME });

const getPostsSaga = createPromiseSaga(GET_POSTS, postsAPI.getPosts);
const getPostSaga = createPromiseSagaById(GET_POST, postsAPI.getPostById);
/* function* getPostsSaga() {
	try {
		// call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.
		const posts = yield call(postsAPI.getPosts);
		yield put({
			type: GET_POSTS_SUCCESS,
			payload: posts,
		}); // 성공 액션 디스패치
	} catch (e) {
		yield put({
			type: GET_POSTS_ERROR,
			error: true,
			payload: e,
		}); // 실패 액션 디스패치
	}
}

// 액션이 지니고 있는 값을 조회하고 싶다면 action을 파라미터로 받아와서 사용할 수 있습니다.
function* getPostSaga(action) {
	const param = action.payload;
	const id = action.meta;
	try {
		// API 함수에 넣어주고 싶은 인자는 call 함수의 두번째 인자부터 순서대로 넣어주면 됩니다.
		const post = yield call(postsAPI.getPostById, param);
		yield put({
			type: GET_POST_SUCCESS,
			payload: post,
			meta: id,
		});
	} catch (e) {
		yield put({
			type: GET_POST_ERROR,
			error: true,
			payload: e,
			meta: id,
		});
	}
} */

function* goToHomeSaga() {
	const history = yield getContext('history');
	history.push('/begin-react/redux/board');
}

// 사가들을 합치기
export function* postsSaga() {
	yield takeEvery(GET_POSTS, getPostsSaga);
	yield takeEvery(GET_POST, getPostSaga);
	yield takeEvery(GO_TO_HOME, goToHomeSaga);
}

const initialState = {
	posts: reducerUtils.initial(),
	/* {
		loading: false,
		data: null,
		error: null,
	} */
	post: reducerUtils.initial(),
	/* {
		loading: false,
		data: null,
		error: null,
	} */
};

export default function posts(state = initialState, action) {
	switch (action.type) {
		case GET_POSTS:
		case GET_POSTS_SUCCESS:
		case GET_POSTS_ERROR:
			return handleAsyncActions(GET_POSTS, 'posts', true)(state, action);
		case GET_POST:
		case GET_POST_SUCCESS:
		case GET_POST_ERROR:
			return handleAsyncActionsById(GET_POST, 'post')(state, action);
		default:
			return state;
	}
}
