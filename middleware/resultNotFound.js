class NoResultFound extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

const createNoResultFound = (message, status) => {
  return new NoResultFound(message, status);
};

module.exports = {
  NoResultFound,
  createNoResultFound,
};
