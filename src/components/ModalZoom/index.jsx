


export default function ModalZoom({foto}){
    return(
        <dialog open={!!foto}>
            <p>OII</p>
                <form method="dialog">
                    <button>ok</button>
                </form>
        </dialog>
    )
}