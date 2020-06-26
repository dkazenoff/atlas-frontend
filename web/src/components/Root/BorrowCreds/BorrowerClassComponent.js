// export default class Borrower extends Component {
//     credentials;
//     constructor(props) {
//         super(props);
//         const history = useHistory();
//         const routeChange = () => {
//             let path = "/home";
//             history.push(path);
//         }
//         this.onChangefname = this.onChangefname.bind(this);
//         this.onChangelname = this.onChangelname.bind(this);
//         this.onChangephone = this.onChangephone.bind(this);
//         this.onChangeemail = this.onChangeemail.bind(this);
//         this.onChangedob = this.onChangedob.bind(this);
//         this.onChangessn = this.onChangessn.bind(this);
//         this.onChangegrossincome = this.onChangegrossincome.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);

//         this.state = {
//             fname: '',
//             lname: '',
//             phone: '',
//             email: '',
//             dob: '',
//             ssn: '',
//             grossincome: ''
//         }
//     }
//     // Form Events!
//     onChangefname(e) {
//         this.setState({ fname: e.target.value })
//     }
//     onChangelname(e) {
//         this.setState({ lname: e.target.value })
//     }
//     onChangephone(e) {
//         this.setState({ phone: e.target.value })
//     }
//     onChangeemail(e) {
//         this.setState({ email: e.target.value })
//     }
//     onChangedob(e) {
//         this.setState({ dob: e.target.value })
//     }
//     onChangessn(e) {
//         this.setState({ ssn: e.target.value })
//     }
//     onChangegrossincome(e) {
//         this.setState({ grossincome: e.target.value })
//     }

//     onSubmit(e) {
//         e.preventDefault()
//         this.setState({
//             fname: '',
//             lname: '',
//             phone: '',
//             email: '',
//             dob: '',
//             ssn: '',
//             grossincome: ''
//         })
//     }
//     //React Life Cycle Methods
//     componentDidMount() {
//         this.credentials = JSON.parse(localStorage.getItem('user'));

//         if (localStorage.getItem('user')) {
//             this.setState({
//                 fname: this.credentials.fname,
//                 lname: this.credentials.lname,
//                 email: this.credentials.email,
//                 phone: this.credentials.phone,
//                 dob: this.credentials.dob,
//                 ssn: this.credentials.ssn,
//                 grossincome: this.credentials.grossincome,

//             })
//         } else {
//             this.setState({
//                 fname: '',
//                 lname: '',
//                 phone: '',
//                 email: '',
//                 dob: '',
//                 ssn: '',
//                 grossincome: ''
//             })
//         }
//     }

//     componentWillUpdate(nextProps, nextState) {
//         localStorage.setItem('user', JSON.stringify(nextState));
//     }

//     handleChange = date => {
//         this.setState({
//             startDate: date
//         });
//     };

//     render() {
//         return (
//             <div>
//                 <NavComponent />
//                 <Form className="borrower" mt-4>
//                     <Form.Row>
//                         <Form.Group as={Col} controlId="formGridEmail">
//                             <Form.Label>First Name</Form.Label>
//                             <Form.Control type="text" placeholder="Enter First Name" />
//                         </Form.Group>
//                         <Form.Group as={Col} controlId="formGridEmail">
//                             <Form.Label>Last Name</Form.Label>
//                             <Form.Control type="text" placeholder="Enter Last Name" />
//                         </Form.Group>

//                         <Form.Group as={Col} controlId="formGridPassword">
//                             <Form.Label>Phone Number</Form.Label>
//                             <Form.Control type="text" placeholder="Enter Phone Number" />
//                         </Form.Group>
//                     </Form.Row>

//                     <Form.Group controlId="formGridAddress1">
//                         <Form.Label>Gross Income</Form.Label>
//                         <Form.Control placeholder="$250,000" />
//                     </Form.Group>

//                     <Form.Group controlId="formGridAddress2">
//                         <Form.Label>Date of Birth</Form.Label> <br />
//                         <DatePicker selected={this.state.date} onChange={this.handleChange} />
//                     </Form.Group>

//                     <Form.Row>
//                         <Form.Group as={Col} controlId="formGridCity">
//                             <Form.Label>Email</Form.Label>
//                             <Form.Control />
//                         </Form.Group>

//                         {/* <Form.Group as={Col} controlId="formGridState">
//                         <Form.Label>State</Form.Label>
//                         <Form.Control as="select" defaultValue="Choose...">
//                             <option>Choose...</option>
//                             <option>...</option>
//                         </Form.Control>
//                     </Form.Group> */}

//                         <Form.Group as={Col} controlId="formGridZip">
//                             <Form.Label>Social Security Number</Form.Label>
//                             <Form.Control />
//                         </Form.Group>
//                     </Form.Row>

//                     <Form.Group id="formGridCheckbox">
//                         <Form.Check type="checkbox" label="I agree to fulfil the terms of the loan requirements if approved" />
//                     </Form.Group>

//                     <Button variant="primary" type="submit" onClick={routeChange}>
//                         Submit
//                 </Button>
//                 </Form>
//             </div>
//         )
//     }

// }
