import axios from "axios";

export const AddStudentApi = async (name, sid, email, phone, image) => {
  try {
    const res = await axios.post("http://192.168.10.6:4000/Student/Api", {
      name: name,
      sid: sid,
      email: email,
      phone: phone,
      image: image,
    });
  } catch (error) {
    console.log("what is error", error);
  }
};

export const getStudentsApi = async () => {
  try {
    const res = await axios.get("http://192.168.10.6:4000/Student/Api");
    return res.data;
  } catch (error) {
    console.log("what is error", error);
  }
};

export const UpdateStudentApi = async (name, sid, email, phone) => {
  try {
    const res = await axios.post("http://192.168.10.6:4000/Student/Api", {
      name: name,
      sid: sid,
      email: email,
      phone: phone,
    });
  } catch (error) {
    console.log("what is error", error);
  }
};
