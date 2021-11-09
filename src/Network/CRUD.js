import axios from "axios";

const API_ENDPOINT = "https://localhost:44339/api/";

const Api = axios.create({
  baseURL: API_ENDPOINT,
});
const handleErrors = (error) => {
  let errors = error?.response?.data?.errors;
  if (errors) {
    if (errors[0]?.msg) {
      return errors[0]?.msg;
    } else {
      return errors;
    }
  } else {
    return error?.response?.statusText;
  }
};
const getRequest = async (url) => {
  console.log("get", `${API_ENDPOINT}${url}`);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios
    .get(`${API_ENDPOINT}${url}`, config)
    .then(async (response) => {
      return response;
    })
    .catch((error) => {
      alert(handleErrors(error));
      return false;
    });
};

const PostRequest = async (body, targetlink) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  return axios
    .post(`${API_ENDPOINT}${targetlink}`, body, config)
    .then(async (response) => {
      return response;
    })
    .catch((error) => {
      alert(handleErrors(error));
      return false;
    });
};

const MultipartRequest = async (body, targetlink) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  return axios
    .post(`${API_ENDPOINT}${targetlink}`, body, config)
    .then(async (response) => {
      return response;
    })
    .catch((error) => {
      alert(handleErrors(error));
      return false;
    });
};

const PutRequest = async (body, targetlink) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  return axios
    .put(`${API_ENDPOINT}${targetlink}`, body, config)
    .then(async (response) => {
      return response;
    })
    .catch((error) => {
      alert(handleErrors(error));
      return false;
    });
};

const DeleteRequest = async (targetlink) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios
    .delete(`${API_ENDPOINT}${targetlink}`, config)
    .then(async (response) => {
      return response;
    })
    .catch((error) => {
      alert(handleErrors(error));
      return false;
    });
};

export { getRequest, PostRequest, MultipartRequest, PutRequest, DeleteRequest };
