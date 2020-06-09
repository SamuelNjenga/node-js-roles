  //Create all the diffrent authentications for what we can do with our projects
  const {ROLE} = require('../data')
  function canViewProject(user,project){
      //Return true or false for if the user has access to this project
      return (
          user.role === ROLE.ADMIN || project.userId === user.id

      )
  }

  module.exports = {
      canViewProject
  }