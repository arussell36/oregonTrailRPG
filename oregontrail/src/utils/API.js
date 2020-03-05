import axios from "axios";

export default {
  // Gets all alerts
  getRoutes: function() {
    return axios.get("/api/route");
  }
  

}