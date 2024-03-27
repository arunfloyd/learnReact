const Contact = () => {
  return (
    <div>
      <h1 className="p-2 m-2 font-bold text-3xl ">Wanna Contact Us</h1>
      <h3>9497184224</h3>
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2 "
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="Message"
        />
        <button className="border border-black p-2 m-2">Submit</button>
      </form>
    </div>
  );
};
export default Contact;
