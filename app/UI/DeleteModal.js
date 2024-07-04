import { deleteTopic } from "@/lib/topic";

const DeleteModal = ({onClose,id}) => {
    const onCancleDelete = () => {
        onClose(false)
    }

    const onDeletHandler = async(e,id) => {
        e.preventDefault()
        await deleteTopic(id)
        window.location.reload()
    }
  return (
    <section className="fixed left-0 top-0 bg-black/50 w-full min-h-full z-40 flex justify-center items-center">
      <div className="w-[400px] rounded-[12px] py-[30px] px-[16px] sm:px-[24px] flex flex-col gap-[24px] sm:gap-[32px] bg-white shadowModal ">
        <div className="flex flex-col gap-[8px]">
          <h5 className="text-text-primary text-[20px] sm:text-lg font-semibold text-center">
            Please confirm if you wish to <br></br> delete the post
          </h5>
          <p className="text-base font-normal text-center px-4" style={{ color: "#475467" }}>
            Are you sure you want to delete the post? Once deleted, it cannot be
            recovered.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-[12px]">
          <button type="button" onClick={onCancleDelete} className="w-full rounded-[8px] border border border-borderDefault bg-white py-[10px] px-[18px] text-description-color buttonFont text-base font-semibold shadowButton">
            Cancel
          </button>
          <button type="submit" onClick={(e) =>onDeletHandler(e,id)} className="w-full rounded-[8px] border border border-red-critical bg-red-critical py-[10px] px-[18px] text-white buttonFont text-base font-semibold shadowButton">
            Delete
          </button>
        </div>
      </div>
    </section>
  );
};

export default DeleteModal;
