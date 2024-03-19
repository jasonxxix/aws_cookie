export const handler = async (event) => {
    console.log('Content::', event);
    
      // let token = event.authorizationToken;
      var effect = 'Deny';
    
      // if(token == "MySecretToken"){
        effect = "Allow";
      // }
      
      // get the resource
      var resource = event.methodArn;
      
      //construct a response which basically it will be a policy
      var authResponse = {};
      authResponse.principalId = 'user';
      var policyDocument = {};
      policyDocument.Version = '2012-10-17';
      policyDocument.Statement = [];
      var statement1 = {};
      statement1.Action = 'execute-api:Invoke';
      statement1.Effect = effect;
      statement1.Resource = resource;
      policyDocument.Statement[0] = statement1;
      authResponse.policyDocument = policyDocument;
      
      // var context = {};
      // authResponse.context = context;
      
      console.log('authResponse::', authResponse);
      
      // return the response
      return authResponse;
  };