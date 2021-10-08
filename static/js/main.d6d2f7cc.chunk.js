(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={label:"Filter_label__1cgqM",input:"Filter_input__35gsl"}},13:function(t,e,n){t.exports={container:"Container_container__1q6Yk"}},2:function(t,e,n){t.exports={form:"Form_form__PiqYe",label:"Form_label__2Pckl",input:"Form_input__1pDiP",btn:"Form_btn__1eJZT"}},20:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(12),i=n.n(c),s=(n(20),n(15)),o=n(4),u=n(5),l=n(8),b=n(7),m=n(32),d=n(13),h=n.n(d),j=n(0);var p=function(t){var e=t.children;return Object(j.jsx)("div",{className:h.a.container,children:e})},f=n(14),O=n(10),C=n.n(O),v=n(2),x=n.n(v),_=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.nameInputId=C.a.generate(),t.numberInputId=C.a.generate(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(f.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{onSubmit:this.handleSubmit,className:x.a.form,children:[Object(j.jsx)("label",{htmlFor:this.nameInputId,className:x.a.label,children:"Name"}),Object(j.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange,id:this.nameInputId,className:x.a.input}),Object(j.jsx)("label",{htmlFor:this.numberInputId,className:x.a.label,children:"Number"}),Object(j.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange,id:this.numberInputId,className:x.a.input}),Object(j.jsx)("button",{type:"submit",className:x.a.btn,children:"Add contact"})]})})}}]),n}(a.Component),g=_,y=n(6),I=n.n(y),N=function(t){var e=t.name,n=t.number,a=t.onClick;return Object(j.jsxs)("li",{children:[Object(j.jsxs)("span",{children:[e,": "]}),Object(j.jsx)("span",{children:n}),Object(j.jsx)("button",{type:"button",onClick:a,className:I.a.button,children:"Delete"})]})},S=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(j.jsx)("ul",{className:I.a.list,children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(j.jsx)(N,{name:a,number:r,onClick:function(){return n(e)}},e)}))})},k=n(11),F=n.n(k);var w=function(t){var e=t.value,n=t.onChange;return Object(j.jsxs)("label",{className:F.a.label,children:["Find contacts by name",Object(j.jsx)("input",{type:"text",value:e,onChange:n,className:F.a.input})]})},A=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=e.name,a=e.number,r={id:Object(m.a)(),name:n,number:a};t.setState((function(t){if(t.contacts.some((function(t){return t.name===n})))return alert("".concat(n," is already in contacts!"))})),t.setState((function(t){var e=t.contacts;return{contacts:[r].concat(Object(s.a)(e))}}))},t.watchFilter=function(e){t.setState({filter:e.currentTarget.value})},t.filterContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.filterContacts();return Object(j.jsxs)(p,{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(g,{onSubmit:this.addContact}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(w,{value:t,onChange:this.watchFilter}),Object(j.jsx)(S,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(r.a.Component),q=A;i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(q,{})}),document.getElementById("root"))},6:function(t,e,n){t.exports={list:"Contact_list__3ts9V",button:"Contact_button__2KI35"}}},[[30,1,2]]]);
//# sourceMappingURL=main.d6d2f7cc.chunk.js.map