import { useState, useEffect } from 'react'
import styles from './Table.module.css'
export default function Table(params) {
  const [display, setDisplay] = useState({
    os: 'Windows',
    build: 'Stable',
    package: 'Pip',
    language: 'Python',
    paltform: 'CUDA 10.2'
  })

  useEffect(() => {
    let buttons = document.querySelectorAll('button')
    console.log(buttons)

    return () => {}
  }, [display])

  function handleActiveButton(e) {
    const newDisplay = { ...display }
    newDisplay[e.currentTarget.id] = e.target.innerText
    setDisplay(newDisplay)
  }

  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <th>Your OS</th>
          <td>
            <button onClick={handleActiveButton} id={'os'}>
              Linux
            </button>
          </td>
          <td>
            <button onClick={handleActiveButton} id={'os'}>
              Mac
            </button>
          </td>
          <td>
            <button onClick={handleActiveButton} id={'os'}>
              Windows
            </button>
          </td>
        </tr>
        <tr>
          <th>PyTorch Build</th>
          <td>
            <button onClick={handleActiveButton} id={'build'}>
              Stable
            </button>
          </td>
          <td>
            <button onClick={handleActiveButton} id={'build'}>
              Preview
            </button>
          </td>
          <td>
            <button onClick={handleActiveButton} id={'build'}>
              LTS
            </button>
          </td>
        </tr>
        <tr>
          <th>Package</th>
          <td style={{ width: '18.75%' }}>
            <button onClick={handleActiveButton} id={'package'}>
              Conda
            </button>
          </td>
          <td style={{ width: '18.75%' }}>
            <button onClick={handleActiveButton} id={'package'}>
              Pip
            </button>
          </td>
          <td style={{ width: '18.75%' }}>
            <button onClick={handleActiveButton} id={'package'}>
              LibTorch
            </button>
          </td>
          <td style={{ width: '18.75%' }}>
            <button onClick={handleActiveButton} id={'package'}>
              Source
            </button>
          </td>
        </tr>
        <tr>
          <th>Language</th>
          <td style={{ width: '37.5%' }}>
            <button onClick={handleActiveButton} id={'language'}>
              Python
            </button>
          </td>
          <td style={{ width: '37.5%' }}>
            <button onClick={handleActiveButton} id={'language'}>
              C++/Java
            </button>
          </td>
        </tr>
        <tr>
          <th>Compute Platform</th>
          <td style={{ width: '18.75%' }}>
            <button onClick={handleActiveButton} id={'platform'}>
              CUDA 10.2
            </button>
          </td>
          <td style={{ width: '18.75%' }}>
            <button onClick={handleActiveButton} id={'platform'}>
              CUDA 11.3
            </button>
          </td>
          <td style={{ width: '18.75%' }}>
            <button onClick={handleActiveButton} id={'platform'}>
              ROCM 4.2 (beta)
            </button>
          </td>
          <td style={{ width: '18.75%' }}>
            <button onClick={handleActiveButton} id={'platform'}>
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
              onClick={() => {
                navigator.clipboard.writeText(
                  `pip3 install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cu113`
                )
              }}
            >
              clipboard image
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
