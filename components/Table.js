import { useState, useEffect } from 'react'
import CopySVG from './svg/copy_svg'
import styles from './Table.module.css'
export default function Table(props) {
  //table function using internal state to manage active looking table cells
  const [display, setDisplay] = useState({
    os: 'Windows',
    build: 'Stable',
    package: 'Pip',
    language: 'Python',
    platform: 'CUDA 10.2'
  })
  const [copy, setCopy] = useState(false)

  useEffect(() => {
    for (const property in display) {
      let buttonNode = document.querySelectorAll(`.${property}`)
      for (const item of buttonNode) {
        //loop through node list to find matching {display} property values
        //and make them 'active' looking
        if (display[property] === item.textContent) {
          item.style.backgroundColor = '#ee4c2c'
          item.style.color = 'white'
        } else if (item.disabled) {
          //check if disabled and leave it
        } else {
          item.style.backgroundColor = 'white'
          item.style.color = 'black'
        }
      }
    }
  }, [display])

  function handleActiveButton(e) {
    const newDisplay = { ...display }
    newDisplay[e.currentTarget.className] = e.target.innerText
    setDisplay(newDisplay)
  }

  function handleCopyButton() {
    //swap between svg and text, after timer go back to default
    if (copy) {
      setCopy(false)
    } else {
      setCopy(true)
      setTimeout(() => {
        setCopy(false)
      }, 5000)
    }
  }

  return (
    //semantic html with buttons for keyboard accessibility
    <table className={styles['install-table']}>
      <tbody>
        <tr>
          <th>Your OS</th>
          <td style={{ width: '25%' }}>
            <button type='button' onClick={handleActiveButton} className='os'>
              Linux
            </button>
          </td>
          <td style={{ width: '25%' }}>
            <button type='button' onClick={handleActiveButton} className='os'>
              Mac
            </button>
          </td>
          <td style={{ width: '25%' }}>
            <button type='button' onClick={handleActiveButton} className='os'>
              Windows
            </button>
          </td>
        </tr>
        <tr>
          <th>PyTorch Build</th>
          <td style={{ width: '25%' }}>
            <button
              type='button'
              onClick={handleActiveButton}
              className='build'
            >
              Stable
            </button>
          </td>
          <td style={{ width: '25%' }}>
            <button
              type='button'
              onClick={handleActiveButton}
              className='build'
            >
              Preview
            </button>
          </td>
          <td style={{ width: '25%' }}>
            <button
              type='button'
              onClick={handleActiveButton}
              className='build'
            >
              LTS
            </button>
          </td>
        </tr>
        <tr>
          <th>Package</th>
          <td style={{ width: '18.75%' }}>
            <button
              type='button'
              onClick={handleActiveButton}
              className='package'
            >
              Conda
            </button>
          </td>
          <td style={{ width: '18.75%' }}>
            <button
              type='button'
              onClick={handleActiveButton}
              className='package'
            >
              Pip
            </button>
          </td>
          <td style={{ width: '18.75%' }}>
            <button
              type='button'
              onClick={handleActiveButton}
              className='package'
            >
              LibTorch
            </button>
          </td>
          <td style={{ width: '18.75%' }}>
            <button
              type='button'
              onClick={handleActiveButton}
              className='package'
            >
              Source
            </button>
          </td>
        </tr>
        <tr>
          <th>Language</th>
          <td style={{ width: '37.5%' }}>
            <button
              type='button'
              onClick={handleActiveButton}
              className='language'
            >
              Python
            </button>
          </td>
          <td style={{ width: '37.5%' }}>
            <button
              type='button'
              onClick={handleActiveButton}
              className='language'
            >
              C++/Java
            </button>
          </td>
        </tr>
        <tr>
          <th>Compute Platform</th>
          <td style={{ width: '18.75%' }}>
            <button
              type='button'
              onClick={handleActiveButton}
              className='platform'
            >
              CUDA 10.2
            </button>
          </td>
          <td style={{ width: '18.75%' }}>
            <button
              type='button'
              onClick={handleActiveButton}
              id={'platform'}
              disabled
            >
              CUDA 11.3
            </button>
          </td>
          <td style={{ width: '18.75%' }}>
            <button
              type='button'
              onClick={handleActiveButton}
              className='platform'
            >
              ROCM 4.2 (beta)
            </button>
          </td>
          <td style={{ width: '18.75%' }}>
            <button
              type='button'
              onClick={handleActiveButton}
              className='platform'
            >
              CPU
            </button>
          </td>
        </tr>
        <tr>
          <th>Run this Command:</th>
          <td style={{ width: '65%' }}>
            <code>
              pip3 install torch torchvision torchaudio --extra-index-url
              https://download.pytorch.org/whl/cu113
            </code>
          </td>
          <td style={{ width: '10%' }}>
            <button
              type='button'
              className={styles.copy}
              onClick={() => {
                navigator.clipboard.writeText(
                  `pip3 install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cu113`
                ),
                  handleCopyButton()
              }}
              style={{
                backgroundColor: 'transparent',
                paddingTop: '10%',
                paddingBottom: '10%'
              }}
              disabled={copy ? true : false}
            >
              <CopySVG display={copy ? 'none' : 'inline-block'} />
              <p
                style={
                  copy
                    ? { display: 'inline-block', color: 'black' }
                    : { display: 'none' }
                }
              >
                Copied!
              </p>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
