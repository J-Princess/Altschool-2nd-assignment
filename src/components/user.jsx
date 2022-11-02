import './style.css'

const User = ({ data, id }) => {
  let imgSrc = data.picture.large;
  let fullname = `${data.name.title} ${data.name.first} ${data.name.last}`;
  let email = data.email
  let phone = data.phone
  let username = data.login.username
  let gender = data.gender
  let age = data.dob.age
  let cell = data.cell
  let address = `${data.location.city}, ${data.location.state}, ${data.location.country}.`
  return (
    <div className="user">
      <figure>
        <img src={imgSrc} />
      </figure>
      <h3>{fullname}</h3>
      <h3>@{username}</h3>
       <h3>{phone} | {cell}</h3>
      <h3>{gender} | {age}</h3>
      <p>{address}</p>
    </div>
  );
};

 
export default User;