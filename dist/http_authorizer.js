export const handler = async (event) => {
  console.log('Content', event);
  
  let token = event.headers.cookie;
  
  if(token == "John Doe") {
    return {
      isAuthorized: true,
      context: {},
    };
  } else {
    return {
      isAuthorized: false,
      context: {},
    };
  }
};


