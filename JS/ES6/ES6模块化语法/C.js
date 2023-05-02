import { A_A } from "./A";
import { B_B } from "./B";

function C() {
    A_A()
    B_B()
    console.log('C')
}
// 导出默认的（只有一个）
export default C