
export default function ContentComponent ({children}) {
    // {children} ; destructring assigment object
    // {a, b} ( a: 10, b: 20)
    // a = ? | b =?
    // ContentComponent la 1 ham se nhan vao 1 tham so
    // tham so o day la 1 object
    // object nay co key ten la children
    // reactjs thi goi la props children
    return (
        <>
            <main>
                {children}
            </main>
        </>
    )
}