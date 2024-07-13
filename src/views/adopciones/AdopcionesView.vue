<template>
    <div class="content">
      <div class="header-container">
        <h1>Registro Medico</h1>
        <p>Detalle de mascota</p>
        <div class="user-info">
            <span>Usuario Admin</span>
        </div>
      </div>
      <div class="header">
        <h2>Juan calos</h2>
        <p class="descr">Perro grande y muy cariñoso</p>
      </div>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th><i class="fas fa-calendar-alt"></i> Fecha</th>
              <th><i class="fas fa-user"></i> Nombres</th>
              <th><i class="fas fa-id-card-alt"></i> Dueño</th>
              <th><i class="fas fa-at"></i> Descripcion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>12 Jan 2022</td>
                <td>Juan</td>
                <td>Andrade</td>
                <td>jPerro grande</td>
                <td class="actions">
                <i class="fas fa-plus-circle"></i>
                <i class="fas fa-edit"></i>
                <i class="fas fa-trash-alt"></i>
              </td>
            </tr>
            <tr>
                <td>12 Jan 2022</td>
                <td>Juan</td>
                <td>Andrade</td>
                <td>jPerro grande</td>
                <td class="actions">
                <i class="fas fa-plus-circle"></i>
                <i class="fas fa-edit"></i>
                <i class="fas fa-trash-alt"></i>
              </td>
            </tr>
            <tr>
                <td>12 Jan 2022</td>
                <td>Juan</td>
                <td>Andrade</td>
                <td>jPerro grande</td>
                <td class="actions">
                <i class="fas fa-plus-circle"></i>
                <i class="fas fa-edit"></i>
                <i class="fas fa-trash-alt"></i>
              </td>
            </tr>
            <tr>
                <td>12 Jan 2022</td>
                <td>Juan</td>
                <td>Andrade</td>
                <td>jPerro grande</td>
                <td class="actions">
                <i class="fas fa-plus-circle"></i>
                <i class="fas fa-edit"></i>
                <i class="fas fa-trash-alt"></i>
              </td>
            </tr>
            <!-- Repite el bloque <tr>...</tr> para más usuarios -->
          </tbody>
        </table>
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
    