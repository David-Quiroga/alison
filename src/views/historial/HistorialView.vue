<template>
    <div class="content">
      <div class="header-container">
        <h1>Adopciones</h1>
        <p>Vacunas para las mascotas</p>
        <div class="user-info">
            <span>Usuario Admin</span>
        </div>
      </div>
      <!-- <div class="search-box">
        <i class="fas fa-search"></i>
        <input type="text" placeholder="Buscar...">
      </div> -->
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th><i class="fas fa-calendar-alt"></i> Fecha</th>
              <th><i class="fas fa-user"></i> Nombres</th>
              <th><i class="fas fa-id-card-alt"></i> Categoria</th>
              <th><i class="fas fa-at"></i> Descripcion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>12 Jan 2022</td>
                <td>Juan</td>
                <td>Vacunas</td>
                <td>Tom hardy</td>
                <td class="actions">
                <i class="fas fa-plus-circle"></i>
              </td>
            </tr>
            <tr>
                <td>12 Jan 2022</td>
                <td>Juan</td>
                <td>Vacunas</td>
                <td>Tom hardy</td>
                <td class="actions">
                <i class="fas fa-plus-circle"></i>
              </td>
            </tr>
            <tr>
                <td>12 Jan 2022</td>
                <td>Juan</td>
                <td>Vacunas</td>
                <td>Tom hardy</td>
                <td class="actions">
                <i class="fas fa-plus-circle"></i>
              </td>
            </tr>
            <tr>
                <td>12 Jan 2022</td>
                <td>Juan</td>
                <td>Vacunas</td>
                <td>Tom hardy</td>
                <td class="actions">
                <i class="fas fa-plus-circle"></i>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- <div class="paginas">
            <p>Se encontro esto xd</p>
        </div> -->
      </div>
    </div>
    </template>
  
    <style>
      .content {
        margin-left: 50px;
        padding: 20px;
        width: calc(100% - 270px);
      }
      p{
        position: absolute;
        top: 10%;
      }
      .descr{
        position:absolute;
        top: 20%;
        padding-left: 0%;
      }
      .search-box {
      background-color: #fff;
      border: 1px solid #ccc;
      padding: 5px 10px;
      border-radius: 5px;
      display: flex;
      align-items: center;
    }
    .paginas {
      display: flex;
      justify-content: flex-end;
      padding: 20px;
      align-items: center;
    }
    .paginas p {
        margin: 0;
      margin-right: auto;
      color: #666;
    }
    .search-box input {
      border: none;
      outline: none;
      margin-left: 5px;
    }
      .header {
        background-color: #e0e4e8;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
  
      .header h2 {
        margin: 0;
        font-size: 24px;
      }
      .table-container {
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        padding: 20px;
      }
  
      table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 10px;
      }
  
      th, td {
        padding: 12px;
        text-align: left;
      }
  
      th {
        background-color: #FFCC5F;
        color: #333;
        font-weight: bold;
      }
  
      tr:nth-child(even) {
        background-color: #f9fafb;
      }
  
      tr:hover {
        background-color: #f1f1f1;
      }
  
      .actions i {
        margin-right: 10px;
        cursor: pointer;
      }
  
      .actions i:hover {
        color: #007bff;
      }
      .status {
        color: #28a745;
        font-weight: bold;
      }
  
      .header-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #d1d8dd;
        padding: 25px;
        border-radius: 10px;
        margin-bottom: 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
  
      .header-container h1 {
        margin: 0;
        font-size: 24px;
      }
    </style>
    