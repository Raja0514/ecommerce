import { useState, FormEvent, useEffect } from "react";
import Adminsidebar from "../../../components/admin/Adminsidebar";

const allLetters = "ASFSDFDSFSDAFSDAFSDAFSDAFASDFasedfdsafsadvcxvxcvdf";
const allNumbers = "1234567890";
const allSymbol = "#%%^%^*&*&*(&*^*%#";

const Coupon = () => {
  const [size, setSize] = useState<number>(8);
  const [prefix, setPrefix] = useState<string>("");
  const [includeNumber, setIncludeNumber] = useState<boolean>(false);
  const [includeCharacters, setIncludeCharacter] = useState<boolean>(false);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);
  const [iscopied, setisCopied] = useState<boolean>(false);
  const [coupon, setCoupon] = useState<string>("");

  const copytext = async (coupon: string) => {
    await window.navigator.clipboard.writeText(coupon);
    setisCopied(true);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!includeNumber && !includeSymbols && !includeCharacters)
      return alert("Please Select At Least One");

    let result: string = prefix || "";

    const looplength: number = size - result.length;

    for (let i = 0; i < looplength; i++) {
      let entireString: string = "";
      if (includeCharacters) entireString += allLetters;
      if (includeSymbols) entireString += allSymbol;
      if (includeNumber) entireString += allNumbers;

      const randomNum: number = ~~(Math.random() * entireString.length);
      result += entireString[randomNum];
    }

    setCoupon(result);
  };

  useEffect(() => {
    setisCopied(false);
  }, [coupon]);

  return (
    <div className="admin-container">
      <Adminsidebar />
      <main className="dashboard-app-container">
        <h1 style={{textAlign:"center"}}>Coupon</h1>
        <section>
          <form className="coupon-form" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Text to include "
              value={prefix}
              onChange={(e) => setPrefix(e.target.value)}
              maxLength={size}
            />
            <input
              type="number"
              placeholder="Coupon length "
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              min={8}
              max={15}
            />

            <fieldset>
              <legend>Include</legend>
              <input
                type="checkbox"
                checked={includeNumber}
                onChange={() => setIncludeNumber((prev) => !prev)}
              />
              <span>Numbers</span>
              <input
                type="checkbox"
                checked={includeCharacters}
                onChange={() => setIncludeCharacter((prev) => !prev)}
              />
              <span>Characters</span>
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={() => setIncludeSymbols((prev) => !prev)}
              />
              <span>Symbols</span>
            </fieldset>
            <button type="submit">Generate</button>
          </form>

          {coupon && (
            <code>
              {coupon}
              <span onClick={() => copytext(coupon)}>
                {iscopied ? "Copied" : "Copy"}
              </span>
            </code>
          )}
        </section>
      </main>
    </div>
  );
};

export default Coupon;
