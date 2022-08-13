import axios from 'axios';

export async function getFeedbacks() {
  try {
    const  {data}  = await axios.get('http://localhost:4000/feedbacks');
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function addFeedback(data) {
  try {
    await axios({
      method: 'post',
      url: 'http://localhost:4000/feedbacks',
      data: {
        ...data,
      },
    });
  } catch (error) {
    console.log(error);
  }
}