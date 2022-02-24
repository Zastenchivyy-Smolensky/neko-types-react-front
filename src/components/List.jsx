// List.jsx
import React, { useEffect, useState } from 'react';
// deletePostを追加
import { getList, deletePost } from '../lib/api/post';
import { useHistory, Link } from 'react-router-dom';

const List = () => {
    const history = useHistory();
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    handleGetList();
  }, []);

  const handleGetList = async () => {
    try {
      const res = await getList();
      console.log(res.data);
      setDataList(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  // 削除する関数を追加
  const handleDelete = async (item) => {
    // 引数にitemを渡してitem.idで「1」など取得できればOK
    console.log('click', item.id)
    try {
      const res = await deletePost(item.id)
      console.log(res.data)
      handleGetList()
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <h1>HOME</h1>
      <button onClick={() => history.push("/new")}>新規作成</button>
      <table>
        <thead>
          <tr>
            <th>名前</th>
            <th>猫種</th>
            <th>好きな食べ物</th>
            <th>好きなおもちゃ</th>
            <th colSpan='1'></th>
            <th colSpan='1'></th>
            <th colSpan='1'></th>
          </tr>
        </thead>
        {dataList.map((item, index) => (
          <tbody key={index}>
            <tr>
              <td>{item.name}</td>
              <td>{item.nekoType}</td>
              <td>{item.detailInfo.favoriteFood}</td>
              <td>{item.detailInfo.favoriteToy}</td>
              <td>
                <Link to={`/edit/${item.id}`}>更新</Link>
              </td>
              <td>
                <Link to={`/post/${item.id}`}>詳細へ</Link>
              </td>

              <td>
                {/* 追加 */}
                <button onClick={() => handleDelete(item)}>削除</button>
                
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
};
export default List;
