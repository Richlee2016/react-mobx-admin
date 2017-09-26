import rxios from './rxios'

const get_movie_list = (qs) => rxios('GET', '/movie_api/list',qs);

export {
    get_movie_list, // 电影列表
}