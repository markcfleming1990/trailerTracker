const {AuthenticationError} = require('apollo-server-express');
const {User, Trailers} = require('../models');
const {signToken} = require('../utils/auth');

const resolvers = {
};