(() => {
    // 布尔类型 
    // let 变量名：数据类型 = 值
    let flag: boolean = true
    flag = false
    // flag =10
    console.log(flag);

    //数字类型
    let a1: number = 10
    let a2: number = 0b1010
    let a3: number = 0o12
    let a4: number = 0xa
    console.log(a1);
    console.log(a2);
    console.log(a3);
    console.log(a4);

    // 字符串类型
    let str1: string = '哈哈哈'
    let str2: string = '嗡嗡嗡'
    console.log(`你是猪${str1},${str2}`);

    // 字符串和数字拼接
    let str3: string = '我有好多钱'
    let nub1: number = 99999999999
    console.log(str3 + nub1);

    console.log("====================================");
    let un: undefined = undefined
    let nu: null = null
    console.log(un, nu);
    // 【注】undefined 和 null 都可以作为其他类型的子类型，把undefined和null赋值给其他类型的变量，如：number类型的变量
    // let nub2: number = undefined
    // console.log(nub2);//把tsconfig.json关掉就可以了


    // 数组类型
    // 【注】数组定义后，里面的数据的类型必须和定义数组的时候的类型一致
    // 数组定义方式1 
    // let 变量名:数据类型[] = [值1,值2,...]
    let arr1: number[] = [1, 2, 3, 4, 5]
    console.log(arr1);

    // 数组定义方式2 --泛型写法
    // let 变量名:Array<数据类型>=[值1,值2,...]
    let arr2: Array<number> = [100, 200, 300]
    console.log(arr2);

    // 元组类型
    // 数据类型的位置及数据个数是一致的（一一对应）
    let arr3: [string, number, boolean] = ['hyl', 100.056, true]
    console.log(arr3[0].split(""));
    console.log(arr3[1].toFixed(2));

    console.log("=====================================");

    // 枚举类型
    // 枚举类型，枚举里面的每个数据值都可以叫元素，每个元素都有自己的编号，编号从0开始，依次递增加1
    enum Color {
        red,
        green,
        blue
    }
    // 定义一个Color的枚举类型的变量,来接收枚举的值
    let color: Color = Color.red
    console.log(color);//0
    console.log(Color.red, Color.green, Color.blue);//0 1 2

    enum Color { Red = 1, Green, Blue }
    let c: Color = Color.Green
    console.log(c);//2

    // any 类型
    let str: any = 100
    str = "人之初性本善"
    console.log(str);
    // 优点：
    // 当一个数组中要存储多个数据，个数不确定，类型不确定时，也可用any类型来定义
    let arr: any[] = [100, '烦烦烦', true]
    console.log(arr);
    // 缺点：
    // console.log(arr[0].split(''));// 在编译过程没有报错，在运行到控制台输出报错


    // void 类型
    // 在函数声明的时候，小括号的后面使用
    // void，代表的是该函数没有任何的返回值
    function showMsg(): void {
        console.log("美女美女美女美女美女");
    }
    console.log(showMsg());

    // object类型
    // 定义一个函数，参数是object类型，返回值也是object类型
    function getObj(obj: object): object {
        console.log(obj);
        return {
            name: "胡伊玲",
            age: 18
        }
    }
    console.log("===============================");

    // 联合类型
    function getString1(str: number | string): string {
        // console.log(getString(123));
        return str.toString()
    }
    console.log('获取字符串形式：' + getString1(123));//123

    function getString2(str: number | string): number {
        // 如果str是string类型就没必要调用toString方法
        if ((<string>str).length) {
            return (str as string).length
        } else {
            // 若是number类型就tostring
            return str.toString().length
        }
    }
    console.log('获取字符串长度；' + getString2(12345));//5
    console.log('获取字符串长度；' + getString2('12345'));//5

    // 类型推断
    let txt = 100
    // tex = '你是煞笔'
    console.log(txt);

    let txt2;
    txt2 = 100;
    txt2 = 'sjb'
    console.log(txt2);






})()