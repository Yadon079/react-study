import React /* , { useReducer } */ from 'react';
import useInputs from './useInputs';

// function reducer(state, action) {
//   return {
//     ...state,
//     [action.name]: action.value
//   };
// }

const InfoR = () => {
  const [state, onChange] = useInputs({
    name: '',
    nickname: ''
  });
  const { name, nickname } = state;
  // const onChange = e => {
  //   dispatch(e.target);
  // };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>name:</b> {name}
        </div>
        <div>
          <b>nickname:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default InfoR;