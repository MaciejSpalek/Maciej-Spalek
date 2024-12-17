const useRouter = () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    query: {},
    pathname: "/",
    asPath: "/",
  });
  
  module.exports = {
    useRouter,
  };