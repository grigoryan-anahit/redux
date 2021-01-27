import style from './editPage.module.css';

const EditPage = ({ data:{id,title,body}, handleChange  ,handleEditPost}) => {

   
    return (
        <div className={style.editPage}>
            <form action="" className={style.Pform}>
                <input
                    type="text"
                    name="title"
                    placeholder="Post a new Title"
                    data-input="editPost"
                  onChange={handleChange}
                  value={title}
                />
                <textarea
                    name="body"
                    cols="20"
                    rows="5"
                    style={{ resize: "none" }}
                    placeholder="Post a new Message"
                    data-input="editPost"
                    onChange={handleChange}
                    value={body}
                />
                <button type="submit"   onClick={(e)=>handleEditPost(e,id)}>Save</button>
            </form>
        </div>
    )
}

export default EditPage
