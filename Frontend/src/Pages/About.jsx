import css from "../style/About.module.css";

export default function About() {
  return (
    <>
      <div className={css.main}>
        <div className={css.container}>
          <div className={css.aboutContainer}>
            <h1>About PayAndBack</h1>
            <p>
              PayAndBack is a secure, fast, and user-friendly wallet platform
              designed to make managing your money easier and more efficient.
              Whether you’re paying bills, transferring money to friends, or
              shopping online, PayAndBack has got you covered.
            </p>
            <h2>What makes PayAndBack unique?</h2>
            <ul>
              <li>
                Seamless transactions: Send and receive money instantly with
                just a few taps.
              </li>
              <li>
                Secure payments: Your transactions are protected with the
                highest security standards.
              </li>
              <li>
                User-friendly interface: Designed for simplicity and ease of use
                for everyone.
              </li>
              <li>
                Multi-platform support: Use PayAndBack on your mobile, tablet,
                or desktop.
              </li>
            </ul>
            <h2>Why choose PayAndBack?</h2>
            <ul>
              <li>
                Manage your finances: Keep track of your spending and easily
                manage your budget.
              </li>
              <li>
                Convenient bill payments: Pay utility bills, recharge your phone,
                and more directly from the app.
              </li>
              <li>
                Trusted by millions: Join a growing community of users who trust
                PayAndBack for their financial needs.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
