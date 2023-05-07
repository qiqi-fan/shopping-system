// 查询列表接口
const getProjectPage = (params) => {
    return $axios({
        url: '/Project/page',
        method: 'get',
        params
    })
}

// 编辑页面反查详情接口
const queryProjectById = (id) => {
    return $axios({
        url: `/Project/${id}`,
        method: 'get'
    })
}

// 删除当前列的接口
const deleProject = (id) => {
    return $axios({
        url: '/Project',
        method: 'delete',
        params: { id }
    })
}

// 修改接口
const editProject = (params) => {
    return $axios({
        url: '/Project',
        method: 'put',
        data: { ...params }
    })
}

// 新增接口
const addProject = (params) => {
    return $axios({
        url: '/Project',
        method: 'post',
        data: { ...params }
    })
}