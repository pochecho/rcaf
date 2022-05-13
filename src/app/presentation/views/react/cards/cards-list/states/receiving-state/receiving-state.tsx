import './receiving-state.scss'

export const ReceivingState = (data: any) => {
  console.log(data);
  return data.cards.map((x: any) => {
    const path = "./" + x.preview;
    return (
      <section>
        <figure>
          <img src={path} alt="" />
        </figure>
        <span>{x.name}</span>
      </section>
    );
  });
};
