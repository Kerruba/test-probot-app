import { Application } from 'probot' // eslint-disable-line no-unused-vars

export = (app: Application) => {
  app.on('push', async (context) => {
      if (context.payload.installation === undefined) {
        console.log("installation id is undefined")
        return
      }

      console.log("installation id is ", context.payload.installation)
      const installationId = context.payload.installation.id;
      
      const github = app.auth(installationId)

      console.log(github)
      
  })
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}
