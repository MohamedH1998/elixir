import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './Breadcrumbs.css'
import Search from './Search'
import data from '../data/data'
const Breadcrumbs = () => {
  const params = useParams();
    const i = params.id

    return (
        <div className="breadcrumbs-container">
        <ul className="breakcrumb-list">
          <li className="breadcrumb-items">
            <Link to="/" className="text-muted">Home</Link>
          </li>
          <li className="breadcrumb-items">
            <Link to="/products" className="text-muted">Products</Link>
          </li>
          {i && (
              <li className="breadcrumb-items">
            <Link to="#" className="text-muted">{data[i].name}</Link>
          </li>
          )}
        </ul>
      </div>
    )
}

export default Breadcrumbs
