import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
      return (  
        <div>
          {/*You can remove this line and the line below. */}
          {/* {JSON.stringify(this.props.emotions)} */}
          <table className="table table-bordered">
            <tbody>
            {
                //Write code to use the .map method that you worked on in the Hands-on React lab to extract the emotions
                [this.props.emotions].map((emotion, index) => (
                    <>
                        <tr>
                            <td>sadness</td>
                            <td>{emotion.sadness}</td>
                        </tr>
                        <tr>
                            <td>joy</td>
                            <td>{emotion.joy}</td>
                        </tr>
                        <tr>
                            <td>fear</td>
                            <td>{emotion.fear}</td>
                        </tr>
                        <tr>
                            <td>disgust</td>
                            <td>{emotion.disgust}</td>
                        </tr>
                        <tr>
                            <td>anger</td>
                            <td>{emotion.anger}</td>
                        </tr>
                    </>
                ))
            }
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;
