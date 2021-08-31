import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/rockets';

const getRockets = async () => {
  const response = await axios.get(url);
  const { data } = response;
  const rockets = [];
  data.map((rocket) => rockets.push(
    {
      id: rocket.rocket_id,
      name: rocket.rocket_name,
      description: rocket.description,
      imageURL: rocket.flick_image[0],
    },
  ));
  console.log(rockets);
  return rockets;
};

export default getRockets;
