// ダミーユーザーデータ
const users = [
    {
    id: 1,
    name: "山田 太郎",
    avatar: "https://via.placeholder.com/50",
    age: 25,
    gender: "男性",
    address: "東京都",
    phone: "090-1234-5678",
    created_at: "2022-01-01",
    updated_at: "2023-08-01"
    },
    {
    id: 2,
    name: "佐藤 花子",
    avatar: "https://placehold.jp/3d4070/ffffff/50x50.png?text=%E3%83%80%E3%83%9F%E3%83%BC%0A",
    age: 30,
    gender: "女性",
    address: "大阪府",
    phone: "080-9876-5432",
    created_at: "2021-02-15",
    updated_at: "2023-09-01"
    }
];

// ユーザー一覧を表示
const userListElement = document.getElementById('users');
users.forEach(user => {
    const li = document.createElement('li');
    li.innerHTML = `<img src="${user.avatar}" alt="avatar" /><span>${user.name}</span><span> ${user.updated_at}</span>`;
    li.addEventListener('click', () => showUserDetail(user));
    userListElement.appendChild(li);
});

// ユーザー詳細を表示
function showUserDetail(user) {
    document.getElementById('avatar').src = user.avatar;
    document.getElementById('name').innerText = user.name;
    document.getElementById('age').innerText = user.age;
    document.getElementById('gender').innerText = user.gender;
    document.getElementById('address').innerText = user.address;
    document.getElementById('phone').innerText = user.phone;
    document.getElementById('created_at').innerText = user.created_at;
    document.getElementById('updated_at').innerText = user.updated_at;

    // 画面の切り替え
    document.getElementById('user-list').style.display = 'none';
    document.getElementById('user-detail').style.display = 'block';
}

// 戻るボタンの機能
document.getElementById('back-btn').addEventListener('click', () => {
    document.getElementById('user-list').style.display = 'block';
    document.getElementById('user-detail').style.display = 'none';
});
