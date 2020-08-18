import token from './passport';

const api = token.getSubreddit('reactjs')

const connection = async (params: any) => {
  try {
    if (params === 'hot') {
      params = await api.getHot({ limit: 10 })
    }
    if (params === 'new') {
      params = await api.getNew({ limit: 10 })
    }
    if (params === 'rising') {
      params = await api.getRising({ limit: 10 })
    }
    return params;
  } catch (err) {
    console.log(err);
  }
}

export default connection;