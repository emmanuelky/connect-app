import axios from "axios";

const service = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "/api"
      : "http://localhost:5000/api",
  withCredentials: true
});

const errHandler = err => {
  console.error(err);
  if (err.response && err.response.data) {
    console.error("API response", err.response.data);
    throw err.response.data.message;
  }
  throw err;
};

export default {
  service: service,

  isLoggedIn() {
    return localStorage.getItem("user") != null;
  },

  signup(userInfo) {
    return service
      .post("/signup", userInfo)
      .then(res => {
        // If we have localStorage.getItem('user') saved, the application will consider we are loggedin
        localStorage.setItem("user", JSON.stringify(res.data));
        return res.data;
      })
      .catch(errHandler);
  },

  login(email, password) {
    return service
      .post("/login", {
        email,
        password
      })
      .then(res => {
        // If we have localStorage.getItem('user') saved, the application will consider we are loggedin
        localStorage.setItem("user", JSON.stringify(res.data));
        return res.data;
      })
      .catch(errHandler);
  },

  getProfile() {
    return service.get("profile").then(res => {
      let user = res.data;
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    });
  },

  logout() {
    localStorage.removeItem("user");
    return service.get("/logout");
  },

  getProjects() {
    return service
      .get("/projects")
      .then(res => res.data)
      .catch(errHandler);
  },

  getProjectsbyProfile() {
    return service
      .get("/projects/byprofile")
      .then(res => res.data)
      .catch(errHandler);
  },

  addProjects(formData) {
    return service
      .post("/projects", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(res => res.data)
      .catch(errHandler);
  },

  getProfiles(body) {
    return service
      .get("/search-profile/" + body)
      .then(res => res.data)
      .catch(errHandler);
  },

  getUsers() {
    return service
      .get("/users")
      .then(res => res.data)
      .catch(errHandler);
  },

  editProfile(body) {
    return service
      .put("/profile", body)
      .then(res => res.data)
      .catch(errHandler);
  },

  getProject(projectId) {
    return service
      .get("/projects/" + projectId)
      .then(res => res.data)
      .catch(errHandler);
  },

  editProject(id, body) {
    return service
      .put("/projects/" + id, body)
      .then(res => res.data)
      .catch(errHandler);
  },

  deleteProject(projectId) {
    return service
      .delete("/projects/" + projectId)
      .then(res => res.data)
      .catch(errHandler);
  },

  getProfileWithUsername(username) {
    return service
      .get("/profile/" + username)
      .then(res => res.data)
      .catch(errHandler);
  },

  getJobs() {
    return service
      .get("/jobs")
      .then(res => res.data)
      .catch(errHandler);
  },

  addPicture(file) {
    const formData = new FormData();
    formData.append("picture", file);
    return service
      .post("/endpoint/to/add/a/picture", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(res => res.data)
      .catch(errHandler);
  }
};
