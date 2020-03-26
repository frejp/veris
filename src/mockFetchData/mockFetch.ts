const loginFailedObject = {
  'name': 'ValidationError',
  'code': 'invalid_user_password',
  'errorDescription': 'Wrong email or password.',
  // This category of error status codes points the finger at clients.
  'statusCode': 400,
  'error': true,
}

const loginSuccessObject = {
  'name': 'Success',
  'code': 'success',
  'description': 'Successful login',
  data: {
    username: 'frejp',
    token: 'dfsfdfdsfddfdsffdsfds',
  },
  // Indicates that the client’s request was accepted successfully.
  'statusCode': 200,
  'error': false,
}

// this is the 'API'
export const login = (username:string, password:string) => {
  if (username === 'frejp@kth.se' && password === '123456789') {
    return loginSuccessObject;
  }
  return loginFailedObject;
};

export type LoginSuccessObjectType =  typeof loginSuccessObject;
export type LoginFailedObjectType =  typeof loginFailedObject;

export const fetchMockLogin = async (username:string, password:string): Promise<LoginSuccessObjectType|LoginFailedObjectType> => {
  return new Promise<LoginSuccessObjectType|LoginFailedObjectType>((resolve, reject) => {
    setTimeout(function() {
      console.log(username + password);
      resolve(login(username, password));
    }, 500);
  })
};
