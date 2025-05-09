// 'use client';

// import React from 'react';
// import { Button } from 'antd';

// type CustomButtonProps = {
//   type: 'login' | 'signup' | 'delete' | 'edit';
//   onClick?: () => void;
//   htmlType?: 'submit' | 'button';
//   block?: boolean;
// };

// const buttonStyles: Record<string, string> = {
//   login: 'bg-blue-600 hover:bg-blue-700 text-white',
//   signup: 'bg-green-600 hover:bg-green-700 text-white',
//   delete: 'bg-red-600 hover:bg-red-700 text-white',
//   edit: 'bg-yellow-500 hover:bg-yellow-600 text-white',
// };

// const buttonLabels: Record<string, string> = {
//   login: 'Login',
//   signup: 'Register',
//   delete: 'Delete',
//   edit: 'Edit',
// };

// const CustomButton: React.FC<CustomButtonProps> = ({
//   type,
//   onClick,
//   htmlType = 'button',
//   block = true,
// }) => {
//   return (
//     <Button
//       className={`${buttonStyles[type]} border-none`}
//       htmlType={htmlType}
//       onClick={onClick}
//       block={block}
//     >
//       {buttonLabels[type]}
//     </Button>
//   );
// };

// export default CustomButton;


'use client';

import React from 'react';

type CustomButtonProps = {
  type: 'login' | 'signup' | 'delete' | 'edit';
  onClick?: () => void;
  htmlType?: 'submit' | 'button';
  block?: boolean;
};

const buttonStyles: Record<string, string> = {
  login: 'bg-blue-600 hover:bg-blue-700 text-white',
  signup: 'bg-green-600 hover:bg-green-700 text-white',
  delete: 'bg-red-600 hover:bg-red-700 text-white',
  edit: 'bg-yellow-500 hover:bg-yellow-600 text-white',
};

const buttonLabels: Record<string, string> = {
  login: 'Login',
  signup: 'Register',
  delete: 'Delete',
  edit: 'Edit',
};

const CustomButton: React.FC<CustomButtonProps> = ({
  type,
  onClick,
  htmlType = 'button',
  block = true,
}) => {
  return (
    <button
      type={htmlType}
      onClick={onClick}
      className={`py-2 px-4 rounded-md font-semibold transition duration-300 ${
        block ? 'w-full' : ''
      } ${buttonStyles[type]}`}
    >
      {buttonLabels[type]}
    </button>
  );
};

export default CustomButton;
