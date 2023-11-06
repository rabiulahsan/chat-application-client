/* eslint-disable react/prop-types */
const SingleChatOptions = ({ user }) => {
  console.log(user);

  return (
    <div>
      <p>{user.name}</p>
    </div>
  );
};

export default SingleChatOptions;
