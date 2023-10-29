function SignUpForm(props) {
   return (
      <form onSubmit={props.submitHandler}>
         <input
            type="text"
            required
            name="name"
            id="name"
            placeholder="NAME"
            value={props.name}
            onChange={(e) => {
               props.setName(e.target.value);
            }}
         />
         <input
            required
            type="email"
            name="email"
            id="email"
            placeholder="EMAIL"
            value={props.email}
            onChange={(e) => {
               props.setEmail(e.target.value);
            }}
         />

         <input
            required
            type="password"
            name="password"
            id="password"
            placeholder="PASSWORD"
            value={props.password}
            onChange={(e) => props.setPassword(e.target.value)}
         />

         <input
            required
            type="text"
            name="address"
            id="address"
            placeholder="ADDRESS"
            value={props.address}
            onChange={(e) => {
               props.setAddress(e.target.value);
            }}
         />
         <input
            required
            type="number"
            name="phone"
            id="phone"
            placeholder="PHONE NO."
            value={props.phone}
            onChange={(e) => {
               props.setPhone(e.target.value);
            }}
         />

         <input type="submit" value="SUBMIT" />
      </form>
   );
}

export default SignUpForm;
