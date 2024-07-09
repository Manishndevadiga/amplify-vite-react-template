import { defineAuth } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
});


// To include other authentication providers such as Google or Facebook, or phonenumber you need
//  to enable and configure them in your defineAuth configuration. Here’s an example


// import { defineAuth } from "@aws-amplify/backend";

// /**
//  * Define and configure your auth resource
//  * @see https://docs.amplify.aws/gen2/build-a-backend/auth
//  */
// export const auth = defineAuth({
//   loginWith: {
//     email: true,
//     phoneNumber: true,
//     socialProviders: {
//       google: {
//         clientId: 'your-google-client-id',
//         clientSecret: 'your-google-client-secret',
//       },
//       facebook: {
//         clientId: 'your-facebook-client-id',
//         clientSecret: 'your-facebook-client-secret',
//       },
//     },
//   },
// });
