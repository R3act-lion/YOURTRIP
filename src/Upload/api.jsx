import axios from 'axios';

// const baseURL = process.env.REACT_APP_URL;
const baseURL = "https://mandarin.api.weniv.co.kr";
// const userToken = process.env.REACT_APP_TOKEN;
const userAccountName = process.env.REACT_APP_ACCOUNT_NAME;
const token = JSON.parse(localStorage.getItem('defaultAccount')).token;
const userToken = localStorage.getItem('Access Token');


const instanceUtil = axios.create({
  baseURL,
  headers: {
    'Content-type': 'application/json',
  },
});

const instance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${userToken}`,
    'Content-type': 'application/json',
  },
});

const instanceDefault  = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-type': 'application/json',
  },
});

const instanceAuth = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${userToken}`,
    'Content-type': 'application/json',
  },
});

const instanceForm = axios.create({
  baseURL,
  headers: { 'Content-type': 'multipart/form-data' },
});

export const signUp = async (data) => {
  try {
    const response = await instance.post(`/user`, data);

    return response.data;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};

export const emailvalid = async (user) => {
  try {
    const response = await instanceUtil.post(`/user/emailvalid`, user);

    return response.data;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};

export const userIdValid = async (user) => {
  try {
    const response = await instanceUtil.post(`/user/accountnamevalid`, user);

    return response.data;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};

export const searchUser = async (keyword) => {
  try {
    const response = await instanceDefault.get(`/user/searchuser/?keyword=${keyword}`);

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getComment = async (postId) => {
  try {
    const response = await instanceDefault.get(`/post/${postId}/comments/?limit=10000&skip=0`);

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const writeComments = async (postId, data) => {
  try {
    const response = await instance.post(`/post/${postId}/comments`, data);

    return response.data;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};


export const getFeedList = async () => {
  try {
    const response = await instance.get('/post/feed');

    return response.data.posts;
  } catch (error) {
    throw new Error(error);
  }
};

export const getMyInfo = async () => {
  try {
    const response = await instanceAuth.get(`/user/myinfo`);

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getFollowerList = async (userAccountName) => {
  try {
    const response = await instance.get(`/profile/${userAccountName}/follower`);

    return response.data;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};

export const getFollowingList = async (userAccountName) => {
  try {
    const response = await instance.get(`/profile/${userAccountName}/following?limit=Number&skip=Number`);

    return response.data;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};

export const follow = async accountname => {
  try {
    const response = await instance.post(`/profile/${accountname}/follow`);

    return response.data.profile.isfollow;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};

export const unFollow = async accountname => {
  try {
    await instance.delete(`/profile/${accountname}/unfollow`);

    return false;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};

export const uploadImageFile = async files => {
  try {
    const name = [];
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append('image', files[i]);
    }

    const { data } = await instanceForm.post('/image/uploadfiles', formData);

    for (const i of data) {
      name.push(i.filename);
    }

    if (name.length > 1) {
      return name.join(',');
    } else {
      return name[0];
    }
  } catch (error) {
    console.error(error.message);
    return error;
  }
};

export const uploadImg = async formData => {
  try {
    const { data } = await instanceForm.post('/image/uploadfile', formData);

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const uploadPost = async post => {
  try {
    const response = await instanceDefault.post('/post',  post );

    return response.data.post;
  } catch (error) {
    throw new Error(error);
  }
};

export const getProduct = async accountname => {
  try {
    const response = await instance.get(`/product/${accountname}`);

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getDefaultProduct = async accountname => {
  try {
    const response = await instance.get(`/product/yourtrip_official/?limit=10000&skip=0`);

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const editPost = async (postId, post) => {
  try {
    const response = await instanceDefault.put(`/post/${postId}`,  post );

    return response.data.post;
  } catch (error) {
    throw new Error(error);
  }
};

export const getProfile = async accountname => {
  try {
    const response = await instanceAuth.get(`/profile/${accountname}`);

    return response.data.profile;
  } catch (error) {
    throw new Error(error);
  }
};

export const getPost = async username => {
  try {
    const response = await instanceDefault.get(`/post/${username}/userpost/?limit=Number&skip=Number`);

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getDefaultPost = async username => {
  try {
    const response = await instanceAuth.get(`/post/yourtrip_official/userpost`);

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const uploadProduct = async data => {
  try {
    const response = await instance.post('/product', data);
    
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const uploadComment = async data => {
  try {
    const response = await instanceDefault.post('/product', data);
    
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const editProduct = async (productId, product) => {
  try {
    const response = await instance.put(`/product/${productId}`, { product });

    return response.data.product;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteProduct = async productId => {
  try {
    const response = await instance.delete(`/product/${productId}`);

    return response;
  } catch (error) {
    throw new Error(error);
  }
};