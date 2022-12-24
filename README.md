# reddit-clone

This project is a simple clone of the popular social media platform, Reddit, built using the Vue.js JavaScript framework.

![Screenshots](https://i.imgur.com/kV1wj6q_d.webp?maxwidth=760&fidelity=grand)

### Prerequisites

Before you begin, make sure you have the following installed on your machine:

- Node.js
- Vue CLI

### Installation

To install the project, follow these steps:

1. Clone the repository to your local machine:

```
git clone [https://github.com/Flamz23/reddit-clone](https://github.com/Flamz23/reddit-clone)
```

2. Navigate to the project directory:

```
cd reddit-clone
```

3. Install the dependencies:

```
npm install
```

4. create a `.env` file in the root directory with your reddit oauth credentials

```
VUE_APP_USERAGENT={YOUR_REDDIT_APP_USERAGENT}
VUE_APP_CLIENT_ID={YOUR_REDDIT_APP_CLIENTID}
VUE_APP_CLIENT_SECRET={YOUR_REDDIT_APP_CLIENT_SECRET}
VUE_APP_REDIRECT_URI=http://localhost:8080/authorization_callback
```

5. Start the development server:

```
npm run serve
```

5. The project will now be running at http://localhost:8080.

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```
