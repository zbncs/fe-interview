var menu_list = [{
	id: '1',
	menu_name: '设置',
	menu_url: 'setting',
	parent: 0
}, {
	id: '1-1',
	menu_name: '权限设置',
	menu_url: 'setting.permission',
	parent: '1'
}, {
	id: '1-1-1',
	menu_name: '用户管理列表',
	menu_url: 'setting.permission.user_list',
	parent: '1-1'
}, {
	id: '1-1-2',
	menu_name: '用户管理新增',
	menu_url: 'setting.permission.user_add',
	parent: '1-1'
}, {
	id: '1-1-3',
	menu_name: '角色管理列表',
	menu_url: 'setting.permission.role_list',
	parent: '1-1'
}, {
	id: '1-2',
	menu_name: '菜单设置',
	menu_url: 'setting.menu',
	parent: '1'
}, {
	id: '1-2-1',
	menu_name: '菜单列表',
	menu_url: 'setting.menu.menu_list',
	parent: '1-2'
}, {
	id: '1-2-2',
	menu_name: '菜单添加',
	menu_url: 'setting.menu.menu_add',
	parent: '1-2'
}, {
	id: '2',
	menu_name: '订单',
	menu_url: 'order',
	parent: 0
}, {
	id: '2-1',
	menu_name: '报单审核',
	menu_url: 'order.orderreview',
	parent: '2'
}, {
	id: '2-2',
	menu_name: '退款管理',
	menu_url: 'order.refundmanagement',
	parent: '2'
}]



function arrToTree(arr) {
  const temp = {}
  let res = {};
  for (const it of arr) {
    it.children = {}
    temp[it.id] = it
  }

  for (const key in temp) {
    if (temp[key].parent) {
      temp[temp[key].parent].children[key] = temp[key]
    } else {
      res[temp[key].id] = temp[key]
    }
  }

  return res
}

console.log(arrToTree(menu_list));





