/*
 * @Author: Crayon 3037686283@qq.com
 * @Date: 2023-07-17 00:20:04
 * @LastEditors: Crayon 3037686283@qq.com
 * @LastEditTime: 2023-07-17 00:37:42
 * @FilePath: \react\1_a_react\02_scaffold\01_learn_scaffold\src\23_hook\nameArray.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { faker } from '@faker-js/faker'

// 创建一个长度为1000的空数组
const nameArray = []

for (let i = 0; i < 1000; i++) {
  nameArray.push(faker.name.fullName())
}
console.log(nameArray)

export default nameArray