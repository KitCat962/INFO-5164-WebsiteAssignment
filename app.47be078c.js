var e,t,n,o,s,i,a,r,l,c,d,u,h,m,f,p,g,E,C,y,v,O,_,I,N=globalThis,T={},b={},R=N.parcelRequire94c2;null==R&&((R=function(e){if(e in T)return T[e].exports;if(e in b){var t=b[e];delete b[e];var n={id:e,exports:{}};return T[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){b[e]=t},N.parcelRequire94c2=R),R.register;var A=R("6AR8M"),S=R("cOa8X"),w=(R("ilpIi"),R("ilpIi")),S=R("cOa8X");async function x(e,t,n,o,s){if(!S.auth.currentUser)return null;try{return(await (0,w.addDoc)((0,w.collection)(S.db,`users/${S.auth.currentUser.uid}/books`),{name:e,author:t,genres:n,rating:o,url:s||null,status:"Reading"})).id}catch{return null}}async function M(e){if(!S.auth.currentUser)return null;await (0,w.deleteDoc)((0,w.doc)(S.db,`users/${S.auth.currentUser.uid}/books`,e))}async function L(e,t){return!!S.auth.currentUser&&(await (0,w.updateDoc)((0,w.doc)(S.db,`users/${S.auth.currentUser.uid}/books`,e),{status:t}),!0)}var w=R("ilpIi"),S=R("cOa8X");(e=h||(h={})).STRING="string",e.NUMBER="number",e.INTEGER="integer",e.BOOLEAN="boolean",e.ARRAY="array",e.OBJECT="object",(t=m||(m={})).LANGUAGE_UNSPECIFIED="language_unspecified",t.PYTHON="python",(n=f||(f={})).OUTCOME_UNSPECIFIED="outcome_unspecified",n.OUTCOME_OK="outcome_ok",n.OUTCOME_FAILED="outcome_failed",n.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded";/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D=["user","model","function","system"];(o=p||(p={})).HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",o.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",o.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",o.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",o.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",(s=g||(g={})).HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",s.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",s.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",s.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",s.BLOCK_NONE="BLOCK_NONE",(i=E||(E={})).HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",i.NEGLIGIBLE="NEGLIGIBLE",i.LOW="LOW",i.MEDIUM="MEDIUM",i.HIGH="HIGH",(a=C||(C={})).BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",a.SAFETY="SAFETY",a.OTHER="OTHER",(r=y||(y={})).FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",r.STOP="STOP",r.MAX_TOKENS="MAX_TOKENS",r.SAFETY="SAFETY",r.RECITATION="RECITATION",r.LANGUAGE="LANGUAGE",r.BLOCKLIST="BLOCKLIST",r.PROHIBITED_CONTENT="PROHIBITED_CONTENT",r.SPII="SPII",r.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",r.OTHER="OTHER",(l=v||(v={})).TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",l.RETRIEVAL_QUERY="RETRIEVAL_QUERY",l.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",l.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",l.CLASSIFICATION="CLASSIFICATION",l.CLUSTERING="CLUSTERING",(c=O||(O={})).MODE_UNSPECIFIED="MODE_UNSPECIFIED",c.AUTO="AUTO",c.ANY="ANY",c.NONE="NONE",(d=_||(_={})).MODE_UNSPECIFIED="MODE_UNSPECIFIED",d.MODE_DYNAMIC="MODE_DYNAMIC";/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class H extends U{constructor(e,t){super(e),this.response=t}}class k extends U{constructor(e,t,n,o){super(e),this.status=t,this.statusText=n,this.errorDetails=o}}class F extends U{}(u=I||(I={})).GENERATE_CONTENT="generateContent",u.STREAM_GENERATE_CONTENT="streamGenerateContent",u.COUNT_TOKENS="countTokens",u.EMBED_CONTENT="embedContent",u.BATCH_EMBED_CONTENTS="batchEmbedContents";class B{constructor(e,t,n,o,s){this.model=e,this.task=t,this.apiKey=n,this.stream=o,this.requestOptions=s}toString(){var e,t;let n=(null===(e=this.requestOptions)||void 0===e?void 0:e.apiVersion)||"v1beta",o=(null===(t=this.requestOptions)||void 0===t?void 0:t.baseUrl)||"https://generativelanguage.googleapis.com",s=`${o}/${n}/${this.model}:${this.task}`;return this.stream&&(s+="?alt=sse"),s}}async function P(e){var t;let n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",function(e){let t=[];return(null==e?void 0:e.apiClient)&&t.push(e.apiClient),t.push("genai-js/0.22.0"),t.join(" ")}(e.requestOptions)),n.append("x-goog-api-key",e.apiKey);let o=null===(t=e.requestOptions)||void 0===t?void 0:t.customHeaders;if(o){if(!(o instanceof Headers))try{o=new Headers(o)}catch(e){throw new F(`unable to convert customHeaders value ${JSON.stringify(o)} to Headers: ${e.message}`)}for(let[e,t]of o.entries()){if("x-goog-api-key"===e)throw new F(`Cannot set reserved header name ${e}`);if("x-goog-api-client"===e)throw new F(`Header name ${e} can only be set using the apiClient field`);n.append(e,t)}}return n}async function $(e,t,n,o,s,i){let a=new B(e,t,n,o,i);return{url:a.toString(),fetchOptions:Object.assign(Object.assign({},function(e){let t={};if((null==e?void 0:e.signal)!==void 0||(null==e?void 0:e.timeout)>=0){let n=new AbortController;(null==e?void 0:e.timeout)>=0&&setTimeout(()=>n.abort(),e.timeout),(null==e?void 0:e.signal)&&e.signal.addEventListener("abort",()=>{n.abort()}),t.signal=n.signal}return t}(i)),{method:"POST",headers:await P(a),body:s})}}async function G(e,t,n,o,s,i={},a=fetch){let{url:r,fetchOptions:l}=await $(e,t,n,o,s,i);return j(r,l,a)}async function j(e,t,n=fetch){let o;try{o=await n(e,t)}catch(t){!function(e,t){let n=e;throw e instanceof k||e instanceof F||((n=new U(`Error fetching from ${t.toString()}: ${e.message}`)).stack=e.stack),n}(t,e)}return o.ok||await K(o,e),o}async function K(e,t){let n,o="";try{let t=await e.json();o=t.error.message,t.error.details&&(o+=` ${JSON.stringify(t.error.details)}`,n=t.error.details)}catch(e){}throw new k(`Error fetching from ${t.toString()}: [${e.status} ${e.statusText}] ${o}`,e.status,e.statusText,n)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),J(e.candidates[0]))throw new H(`${W(e)}`,e);return function(e){var t,n,o,s;let i=[];if(null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)for(let t of null===(s=null===(o=e.candidates)||void 0===o?void 0:o[0].content)||void 0===s?void 0:s.parts)t.text&&i.push(t.text),t.executableCode&&i.push("\n```"+t.executableCode.language+"\n"+t.executableCode.code+"\n```\n"),t.codeExecutionResult&&i.push("\n```\n"+t.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}(e)}if(e.promptFeedback)throw new H(`Text not available. ${W(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),J(e.candidates[0]))throw new H(`${W(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),q(e)[0]}if(e.promptFeedback)throw new H(`Function call not available. ${W(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),J(e.candidates[0]))throw new H(`${W(e)}`,e);return q(e)}if(e.promptFeedback)throw new H(`Function call not available. ${W(e)}`,e)},e}function q(e){var t,n,o,s;let i=[];if(null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)for(let t of null===(s=null===(o=e.candidates)||void 0===o?void 0:o[0].content)||void 0===s?void 0:s.parts)t.functionCall&&i.push(t.functionCall);return i.length>0?i:void 0}const V=[y.RECITATION,y.SAFETY,y.LANGUAGE];function J(e){return!!e.finishReason&&V.includes(e.finishReason)}function W(e){var t,n,o;let s="";if((!e.candidates||0===e.candidates.length)&&e.promptFeedback)s+="Response was blocked",(null===(t=e.promptFeedback)||void 0===t?void 0:t.blockReason)&&(s+=` due to ${e.promptFeedback.blockReason}`),(null===(n=e.promptFeedback)||void 0===n?void 0:n.blockReasonMessage)&&(s+=`: ${e.promptFeedback.blockReasonMessage}`);else if(null===(o=e.candidates)||void 0===o?void 0:o[0]){let t=e.candidates[0];J(t)&&(s+=`Candidate was blocked due to ${t.finishReason}`,t.finishMessage&&(s+=`: ${t.finishMessage}`))}return s}function X(e){return this instanceof X?(this.v=e,this):new X(e)}"function"==typeof SuppressedError&&SuppressedError;/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function z(e){let t=[],n=e.getReader();for(;;){let{done:e,value:o}=await n.read();if(e)return Y(function(e){let t=e[e.length-1],n={promptFeedback:null==t?void 0:t.promptFeedback};for(let t of e){if(t.candidates){let e=0;for(let o of t.candidates)if(n.candidates||(n.candidates=[]),n.candidates[e]||(n.candidates[e]={index:e}),n.candidates[e].citationMetadata=o.citationMetadata,n.candidates[e].groundingMetadata=o.groundingMetadata,n.candidates[e].finishReason=o.finishReason,n.candidates[e].finishMessage=o.finishMessage,n.candidates[e].safetyRatings=o.safetyRatings,o.content&&o.content.parts){n.candidates[e].content||(n.candidates[e].content={role:o.content.role||"user",parts:[]});let t={};for(let s of o.content.parts)s.text&&(t.text=s.text),s.functionCall&&(t.functionCall=s.functionCall),s.executableCode&&(t.executableCode=s.executableCode),s.codeExecutionResult&&(t.codeExecutionResult=s.codeExecutionResult),0===Object.keys(t).length&&(t.text=""),n.candidates[e].content.parts.push(t)}e++}t.usageMetadata&&(n.usageMetadata=t.usageMetadata)}return n}(t));t.push(o)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(e,t,n,o){return function(e){let[t,n]=(function(e){let t=e.getReader();return new ReadableStream({start(e){let n="";return function o(){return t.read().then(({value:t,done:s})=>{let i;if(s){if(n.trim()){e.error(new U("Failed to parse stream"));return}e.close();return}let a=(n+=t).match(Q);for(;a;){try{i=JSON.parse(a[1])}catch(t){e.error(new U(`Error parsing JSON response: "${a[1]}"`));return}e.enqueue(i),a=(n=n.substring(a[0].length)).match(Q)}return o()})}()}})})(e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0}))).tee();return{stream:function(e){return function(e,t,n){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var o,s=n.apply(e,t||[]),i=[];return o={},a("next"),a("throw"),a("return"),o[Symbol.asyncIterator]=function(){return this},o;function a(e){s[e]&&(o[e]=function(t){return new Promise(function(n,o){i.push([e,t,n,o])>1||r(e,t)})})}function r(e,t){try{var n;(n=s[e](t)).value instanceof X?Promise.resolve(n.value.v).then(l,c):d(i[0][2],n)}catch(e){d(i[0][3],e)}}function l(e){r("next",e)}function c(e){r("throw",e)}function d(e,t){e(t),i.shift(),i.length&&r(i[0][0],i[0][1])}}(this,arguments,function*(){let t=e.getReader();for(;;){let{value:e,done:n}=yield X(t.read());if(n)break;yield yield X(Y(e))}})}(t),response:z(n)}}(await G(t,I.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(n),o))}async function ee(e,t,n,o){let s=await G(t,I.GENERATE_CONTENT,e,!1,JSON.stringify(n),o);return{response:Y(await s.json())}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(e){if(null!=e){if("string"==typeof e)return{role:"system",parts:[{text:e}]};if(e.text)return{role:"system",parts:[e]};if(e.parts)return e.role?e:{role:"system",parts:e.parts}}}function en(e){let t=[];if("string"==typeof e)t=[{text:e}];else for(let n of e)"string"==typeof n?t.push({text:n}):t.push(n);return function(e){let t={role:"user",parts:[]},n={role:"function",parts:[]},o=!1,s=!1;for(let i of e)"functionResponse"in i?(n.parts.push(i),s=!0):(t.parts.push(i),o=!0);if(o&&s)throw new U("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!o&&!s)throw new U("No content is provided for sending chat message.");return o?t:n}(t)}function eo(e){let t;return t=e.contents?e:{contents:[en(e)]},e.systemInstruction&&(t.systemInstruction=et(e.systemInstruction)),t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],ei={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]},ea="SILENT_ERROR";class er{constructor(e,t,n,o={}){this.model=t,this.params=n,this._requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,(null==n?void 0:n.history)&&(function(e){let t=!1;for(let n of e){let{role:e,parts:o}=n;if(!t&&"user"!==e)throw new U(`First content should be with role 'user', got ${e}`);if(!D.includes(e))throw new U(`Each item should include role field. Got ${e} but valid roles are: ${JSON.stringify(D)}`);if(!Array.isArray(o))throw new U("Content should have 'parts' property with an array of Parts");if(0===o.length)throw new U("Each Content should have at least one part");let s={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(let e of o)for(let t of es)t in e&&(s[t]+=1);let i=ei[e];for(let t of es)if(!i.includes(t)&&s[t]>0)throw new U(`Content with role '${e}' can't contain '${t}' part`);t=!0}}(n.history),this._history=n.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,t={}){var n,o,s,i,a,r;let l;await this._sendPromise;let c=en(e),d={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(o=this.params)||void 0===o?void 0:o.generationConfig,tools:null===(s=this.params)||void 0===s?void 0:s.tools,toolConfig:null===(i=this.params)||void 0===i?void 0:i.toolConfig,systemInstruction:null===(a=this.params)||void 0===a?void 0:a.systemInstruction,cachedContent:null===(r=this.params)||void 0===r?void 0:r.cachedContent,contents:[...this._history,c]},u=Object.assign(Object.assign({},this._requestOptions),t);return this._sendPromise=this._sendPromise.then(()=>ee(this._apiKey,this.model,d,u)).then(e=>{var t,n;if(e.response.candidates&&e.response.candidates.length>0&&(null===(t=e.response.candidates[0])||void 0===t?void 0:t.content)!==void 0){this._history.push(c);let t=Object.assign({parts:[],role:"model"},null===(n=e.response.candidates)||void 0===n?void 0:n[0].content);this._history.push(t)}else{let t=W(e.response);t&&console.warn(`sendMessage() was unsuccessful. ${t}. Inspect response object for details.`)}l=e}),await this._sendPromise,l}async sendMessageStream(e,t={}){var n,o,s,i,a,r;await this._sendPromise;let l=en(e),c={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(o=this.params)||void 0===o?void 0:o.generationConfig,tools:null===(s=this.params)||void 0===s?void 0:s.tools,toolConfig:null===(i=this.params)||void 0===i?void 0:i.toolConfig,systemInstruction:null===(a=this.params)||void 0===a?void 0:a.systemInstruction,cachedContent:null===(r=this.params)||void 0===r?void 0:r.cachedContent,contents:[...this._history,l]},d=Object.assign(Object.assign({},this._requestOptions),t),u=Z(this._apiKey,this.model,c,d);return this._sendPromise=this._sendPromise.then(()=>u).catch(e=>{throw Error(ea)}).then(e=>e.response).then(e=>{var t;if(e.candidates&&e.candidates.length>0&&(null===(t=e.candidates[0])||void 0===t?void 0:t.content)!==void 0){this._history.push(l);let t=Object.assign({},e.candidates[0].content);t.role||(t.role="model"),this._history.push(t)}else{let t=W(e);t&&console.warn(`sendMessageStream() was unsuccessful. ${t}. Inspect response object for details.`)}}).catch(e=>{e.message!==ea&&console.error(e)}),u}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function el(e,t,n,o){return(await G(t,I.COUNT_TOKENS,e,!1,JSON.stringify(n),o)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ec(e,t,n,o){return(await G(t,I.EMBED_CONTENT,e,!1,JSON.stringify(n),o)).json()}async function ed(e,t,n,o){let s=n.requests.map(e=>Object.assign(Object.assign({},e),{model:t}));return(await G(t,I.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:s}),o)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,t,n={}){this.apiKey=e,this._requestOptions=n,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=et(t.systemInstruction),this.cachedContent=t.cachedContent}async generateContent(e,t={}){var n;let o=eo(e),s=Object.assign(Object.assign({},this._requestOptions),t);return ee(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},o),s)}async generateContentStream(e,t={}){var n;let o=eo(e),s=Object.assign(Object.assign({},this._requestOptions),t);return Z(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},o),s)}startChat(e){var t;return new er(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(t=this.cachedContent)||void 0===t?void 0:t.name},e),this._requestOptions)}async countTokens(e,t={}){let n=function(e,t){var n;let o={model:null==t?void 0:t.model,generationConfig:null==t?void 0:t.generationConfig,safetySettings:null==t?void 0:t.safetySettings,tools:null==t?void 0:t.tools,toolConfig:null==t?void 0:t.toolConfig,systemInstruction:null==t?void 0:t.systemInstruction,cachedContent:null===(n=null==t?void 0:t.cachedContent)||void 0===n?void 0:n.name,contents:[]},s=null!=e.generateContentRequest;if(e.contents){if(s)throw new F("CountTokensRequest must have one of contents or generateContentRequest, not both.");o.contents=e.contents}else if(s)o=Object.assign(Object.assign({},o),e.generateContentRequest);else{let t=en(e);o.contents=[t]}return{generateContentRequest:o}}(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),o=Object.assign(Object.assign({},this._requestOptions),t);return el(this.apiKey,this.model,n,o)}async embedContent(e,t={}){let n="string"==typeof e||Array.isArray(e)?{content:en(e)}:e,o=Object.assign(Object.assign({},this._requestOptions),t);return ec(this.apiKey,this.model,n,o)}async batchEmbedContents(e,t={}){let n=Object.assign(Object.assign({},this._requestOptions),t);return ed(this.apiKey,this.model,e,n)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e){this.apiKey=e}getGenerativeModel(e,t){if(!e.model)throw new U("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new eu(this.apiKey,e,t)}getGenerativeModelFromCachedContent(e,t,n){if(!e.name)throw new F("Cached content must contain a `name` field.");if(!e.model)throw new F("Cached content must contain a `model` field.");for(let n of["model","systemInstruction"])if((null==t?void 0:t[n])&&e[n]&&(null==t?void 0:t[n])!==e[n]){if("model"===n&&(t.model.startsWith("models/")?t.model.replace("models/",""):t.model)===(e.model.startsWith("models/")?e.model.replace("models/",""):e.model))continue;throw new F(`Different value for "${n}" specified in modelParams (${t[n]}) and cachedContent (${e[n]})`)}let o=Object.assign(Object.assign({},t),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new eu(this.apiKey,o,n)}}let em=null;async function ef(){return em||(em=new eh((await (0,w.getDoc)((0,w.doc)(S.db,"static/googlegemini"))).get("key")).getGenerativeModel({model:"gemini-1.5-flash"}))}async function ep(e){let t=await ef(),{response:n}=await t.generateContent(e);return console.log(n),n.text()}const eg=["Reading","Completed","Want to Read","Dropped"],eE=document.getElementById("p_user");document.getElementById("btn_logout").addEventListener("click",()=>(0,A.signOut)(S.auth));const eC=document.getElementById("form_addbook"),ey=document.getElementById("text_bookname"),ev=document.getElementById("text_bookauthor"),eO=document.getElementById("select_genres"),e_=document.getElementById("div_rating"),eI=document.getElementById("range_rating"),eN=document.getElementById("text_url"),eT=document.getElementById("div_formerror");eT.style.display="none";const eb=document.getElementById("p_formerror"),eR=document.getElementById("div_bookcontainer");function eA(e){for(let t of(console.log(e),eR.innerHTML="",e)){console.log(t);let e=document.createElement("div");e.className="box flex row gap-md";{let n=document.createElement("div");n.className="flex column gap-sm";let o=document.createElement("p");o.textContent=t.name,n.appendChild(o);let s=document.createElement("p");s.textContent=t.author,n.appendChild(s);let i=document.createElement("p");i.textContent=t.genres.join(", "),n.appendChild(i),e.appendChild(n)}{let n=document.createElement("div");n.className="flex column gap-sm";let o=document.createElement("div");if(o.className="rating_display",eS(o,t.rating),n.appendChild(o),t.url){let e=document.createElement("a");e.textContent=e.href=t.url,n.appendChild(e)}e.appendChild(n)}{let n=document.createElement("div");n.className="flex column gap-md";let o=document.createElement("select");for(let e of eg){let n=document.createElement("option");n.selected=e===t.status,n.label=e,n.value=e,o.appendChild(n)}o.addEventListener("change",e=>L(t.id,e.target.value)),n.appendChild(o);let s=document.createElement("button");s.textContent="Delete Book",s.addEventListener("click",async()=>{confirm(`Are you sure you want to delete "${t.name}"?`)&&M(t.id)}),n.appendChild(s),e.appendChild(n)}eR.appendChild(e)}}function eS(e,t){let n=Math.min(5,Math.max(0,t));e.innerHTML="";for(let t=0;t<5;t++){let o=document.createElement("p");o.textContent=t<n?"★":"☆",e.appendChild(o)}}(0,S.auth).onAuthStateChanged(e=>{console.log(e),e?(eE.textContent=`Logged in as ${e.displayName}`,function(e){if(!S.auth.currentUser)throw"No authenticated user";(0,w.onSnapshot)((0,w.collection)(S.db,`users/${S.auth.currentUser.uid}/books`),t=>e(t.docs.map(e=>({id:e.id,...e.data()}))))}(eA),(0,w.getDoc)((0,w.doc)(S.db,"static","genres")).then(e=>{let t=e.get("genres");for(let e of(console.log(t),t)){let t=document.createElement("option");t.value=e,t.label=e,eO.appendChild(t)}}).catch(e=>console.log(e))):window.location="/INFO-5164-WebsiteAssignment/"}),eS(e_,parseInt(eI.value)),eI.addEventListener("input",function(){eS(e_,parseInt(this.value))}),eC.addEventListener("submit",function(e){e.preventDefault(),eT.style.display="none",ey.setCustomValidity(""),ev.setCustomValidity(""),eO.setCustomValidity("");let t={},n=ey.value.trim();0===n.length&&(t.text_bookname=["empty"]);let o=ev.value.trim();0===o.length&&(t.text_bookauthor=["empty"]);let s=[...eO.selectedOptions].map(e=>e.value);0===s.length&&(t.select_genres=["empty"]);let i=parseInt(eI.value),a=eN.value.trim();if(0!==Object.keys(t).length){t.text_bookname&&ey.setCustomValidity("Name cannot be empty"),t.text_bookauthor&&ev.setCustomValidity("Author cannot be empty"),t.select_genres&&eO.setCustomValidity("Must select at least one genre");return}x(n,o,s,i,a).then(()=>eC.reset()).catch(e=>{eT.style.display="block",eb.textContent=JSON.stringify(e)})}),function(e){let t=document.createElement("div");t.className="ai container closed";let n=document.createElement("div");n.className="flex row";let o=document.createElement("button");o.className="tertiary",o.textContent=">",o.style.fontWeight="bold",n.appendChild(o);let s=document.createElement("div");s.className="spacer",n.appendChild(s),t.appendChild(n);let i=document.createElement("div");i.className="ai message_container",t.appendChild(i);let a=document.createElement("div");a.className="flex row";let r=document.createElement("input");r.type="text",r.placeholder="Type something",r.className="spacer",a.appendChild(r);let l=document.createElement("button");function c(e,t){let n=document.createElement("p");n.textContent=t?"> "+e:e+" <",n.className=`ai message ${t?"recieve":"send"}`,i.appendChild(n)}async function d(){let e=r.value.trim();if(0===e.length)return;c(e,!1),r.value="...",r.disabled=!0;let t=await ep(e.toLowerCase());r.value="",r.disabled=!1,c(t,!0),r.focus()}l.textContent="Send",a.appendChild(l),t.appendChild(a),o.addEventListener("click",()=>{let e=t.className.includes("closed");t.className="ai container "+(e?"":"closed"),o.textContent=e?"v":">"}),l.addEventListener("click",d),r.addEventListener("keypress",e=>{"Enter"==e.key&&d()}),c("Hello! I am a personal assistent here to aid in book recommendations. Tell me what genres you enjoy and I can recommend some books for you.",!0),e.appendChild(t)}(document.getElementById("ai_binding"));
//# sourceMappingURL=app.47be078c.js.map
