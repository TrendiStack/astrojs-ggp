const HoursOfOperation = () => {
  return (
    <div className="flex flex-col gap-10 text-center">
      <h3 className="text-3xl md:text-5xl">Hour of Operation</h3>
      <ul className="grid gap-3 text-xl md:text-3xl">
        <li className="flex justify-between uppercase">
          <p>sunday</p>
          <p>12:30 PM - 9:30 PM</p>
        </li>
        <li className="flex justify-between uppercase">
          <p>monday</p>
          <p>closed</p>
        </li>
        <li className="flex justify-between uppercase">
          <p>Tuesday</p>
          <p>12:30 PM - 9:30 PM</p>
        </li>
        <li className="flex justify-between uppercase">
          <p>Wednesday</p>
          <p>12:30 PM - 9:30 PM</p>
        </li>
        <li className="flex justify-between uppercase">
          <p>Thursday</p>
          <p>12:30 PM - 9:30 PM</p>
        </li>
        <li className="flex justify-between uppercase">
          <p>Friday</p>
          <p>12:30 PM - 9:30 PM</p>
        </li>
        <li className="flex justify-between uppercase">
          <p>Saturday</p>
          <p>12:30 PM - 9:30 PM</p>
        </li>
      </ul>
      <p className="text-zinc-600 text-xl md:text-3xl">
        *Dining closed from 3PM - 5PM*
      </p>
    </div>
  );
};

export default HoursOfOperation;
