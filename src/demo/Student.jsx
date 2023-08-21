import Logo1 from '../assets/icon-1.png';
import Logo2 from '../assets/icon-2.png';
import Logo3 from '../assets/icon-3.png';

export default function Student() {

    const show = true;

    const dataStudent = [
        {id: '1', name: 'teo', phone: '123456', gender: 0,img:Logo1, showLogo: false},
        {id: '2', name: 'ty', phone: '543126',gender: 1,img:Logo2,showLogo: true},
        {id: '3', name: 'tom', phone: '432651',gender: 1,img:Logo3,showLogo: false},
        {id: '4', name: 'tep', phone: '345621',gender: 0,img:Logo1,showLogo: true}
    ];

    const rederRows = (index) => {
        return index % 2 == 1 ? 
        { backgroundColor:'#ccc'} : { backgroundColor:'#000'}
    }

    if (!show) {
        return (
            <>
                <p> Khng co ket qua</p>
            </>
        )
    }

    return (
        <>
            <h1>____ Danh Sach Sinh Vien____</h1>
            <table width="100%" border={1} cellPadding={0} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>Ma Sinh Vien</th>
                        <th>Ten</th>
                        <th>So Dien Thoai</th>
                        <th>Gioi Tinh</th>
                        <th>Anh</th>
                    </tr>
                </thead>
                <tbody>
                    {   dataStudent.map((item,index) => (
                        <tr key={index} style={rederRows(index)}>

                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.gender == 1 ? 'Nam' : 'Nu'}</td>
                            <td>
                                {
                                    item.showLogo && <img src = {item.img}/>
                                }
                            </td>
                        </tr>
                    ))  }               
                </tbody>
            </table>
        </>
    )
}