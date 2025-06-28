// axios 버전

const postsList = document.getElementById('posts-list');
const loadingMsg = document.getElementById('loading');
const errorMsg = document.getElementById('error');

// 데이터를 화면에 표시하는 함수
function displayPosts(posts) {
    postsList.innerHTML = '';
    posts.forEach((post) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <h2>#${post.id} / ${post.title}</h2>
            <p>${post.body}</p>
            <span>written by : user${post.userId}</span>`;

        postsList.appendChild(listItem);
    });
}

// API 호출 및 데이터 처리
function fetchPostsWithAxois() {
    loadingMsg.style.display = 'block';
    errorMsg.classList.remove('error-visible');

    axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            displayPosts(response.data); // axios는 응답 데이터를 response.data에 자동으로 파싱해줌
        })
        .catch((err) => {
            // axios는 에러 발생 시 더 상세한 정보를 제공
            console.error('게시물을 불러오는 중 오류 발생 : ', err);
            errorMsg.classList.add('error-visible');
        })
        .finally(() => {
            loadingMsg.style.display = 'none';
        });
}
// 페이지 로드 시 게시물 불러오기
fetchPostsWithAxois();

/* async, await 버전

async function fetchPost() {
    loadingMsg.style.display = 'block';
    errorMsg.classList.remove('error-visible');

    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        displayPosts(data);
    } catch (err) {
        console.error('게시물을 불러오는 중 오류 발생 : ', err);
        errorMsg.classList.add('error-visible');
    } finally {
        loadingMsg.style.display = 'none';
    }
}

fetchPost();

*/

/*
fetch 함수는 사실 두 단계의 비동기 작업을 거친다.

네트워크 요청 완료 (첫 번째 await fetch()):

>> const response = await fetch('...');
이 await fetch()는 서버로부터 응답 헤더와 상태 코드를 포함하는 Response 객체를 받는 것까지 기다림
쉽게 말해, 서버가 "응답 보낼 준비 됐어!"라고 알려주는 것까지 기다리는 것
하지만 응답 본문(body)의 데이터는 아직 다 받지 못했을 수도 있고, 받았다 해도 아직 JavaScript가
사용할 수 있는 형태로 파싱(parsing)되지 않은 상태임. 응답 본문은 스트림(stream) 형태


응답 본문 파싱 완료 (두 번째 await response.json()):

>> const data = await response.json();
response.json() 메서드는 Response 객체의 응답 본문(body)을 읽어서 JSON 형태로 파싱하는 비동기 작업을 수행
이 작업도 시간이 걸릴 수 있음. 예를 들어, 응답 본문의 데이터 양이 엄청 많거나, 네트워크 상황이 안 좋아서 데이터가 천천히 들어올 수도?
그래서 response.json()도 Promise를 반환. 이 Promise는 응답 본문이 완전히 읽히고 JSON으로 파싱이 완료되면,
그 파싱된 JSON 데이터를 가지고 resolve되는 것
 */
